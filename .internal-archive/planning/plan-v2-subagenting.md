# Implementation Plan: Sub-agent Based Architecture for `teb` Skill (v2)

본 계획서는 `/teb` 스킬의 복잡도를 낮추고 모듈화된 설계를 위해, 각 부작업을 전담 에이전트(`.gemini/agents`)에게 위임하는 구조를 정의합니다.

## 1. 개요 (Objective)
기존의 단일 프롬프트 방식에서 벗어나, 텍스트 추출, 요약, 포맷팅 등의 작업을 전문 에이전트들이 수행하도록 분리합니다. 이를 통해 지시 이행의 정확도를 높이고 유지보수를 용이하게 합니다.

## 2. 시스템 아키텍처 (Architecture)

### 2.1 Orchestrator: `teb` Skill
- 유저 명령(`/teb:ppt-slides`, `/teb:pdf-images`) 수신 및 옵션 파싱.
- 전체 워크플로우 제어 및 하위 에이전트 호출.
- 최종 결과를 파일로 저장.

### 2.2 Specialist Agents
1. **`teb-extract-agent` (추출 전문가)**
   - 역할: 이미지(PPT/PDF) 내의 텍스트를 구조화하여 누락 없이 추출.
   - 입력: 시각적 미디어(이미지) 리스트.
   - 출력: 정제된 텍스트 데이터 (Raw Text/Structure).

2. **`teb-briefing-agent` (통찰 전문가)**
   - 역할: 추출된 내용 또는 원본 이미지를 분석하여 핵심 요약 및 인사이트 생성.
   - 페르소나: 분석적이며 통찰력 있는 요약 제공.
   - 출력: 요약문 세트.

3. **`teb-formatting-agent` (포맷 전문가)**
   - 역할: 생성된 텍스트를 유저가 요청한 포맷(`md`, `txt`, `toml`)으로 변환.
   - 입력: 추출/요약된 텍스트 및 타겟 포맷 정보.
   - 출력: 최종 포맷팅된 문자열.

4. **`teb-crawling-agent` (수집 전문가 - 선택적)**
   - 역할: 외부 URL이 포함된 경우 이미지를 수집하거나 관련 데이터를 fetch.

---

## 3. 상세 워크플로우 (Detailed Workflow)

### Case A: `--extracting` 모드 수행 시
1. **[Skill]** 유저 입력 이미지 경로들을 확보.
2. **[Extract Agent]** 이미지를 분석하여 텍스트 데이터 추출.
3. **[Formatting Agent]** 추출된 데이터를 지정된 형식(`md`, `txt`, `toml`)으로 가공.
4. **[Skill]** 최종 결과물을 파일로 저장.

### Case B: `--briefing` 모드 수행 시
1. **[Skill]** 유저 입력 이미지 경로들을 확보.
2. **[Briefing Agent]** 이미지를 분석하여 핵심 내용 요약 및 통찰 도출.
3. **[Formatting Agent]** 요약된 내용을 지정된 형식으로 가공.
4. **[Skill]** 최종 결과물을 파일로 저장.

---

## 4. 구현 단계 (Implementation Steps)

### Step 1: 에이전트 정의 및 프롬프트 고도화 (ING)
- `.gemini/agents/`에 각 에이전트의 구체적인 페르소나와 지시사항 작성.
- 에이전트 간의 입출력 규격 정의.

### Step 2: 메인 스킬 로직 수정 (`SKILL.md` 및 Scripts)
- 하위 에이전트를 호출하는 `agent_call` 로직 구현.
- 각 에이전트의 결과를 체이닝(Chaining)하는 흐름 구축.

### Step 3: 포맷팅 로직 정교화
- `teb-formatting-agent`가 `toml` 포맷 등으로 변환할 때 데이터 구조를 어떻게 유지할지 규칙 정의.

### Step 4: 예외 처리 및 최적화
- 이미지 경로가 잘못되었거나 에이전트 응답이 부실할 경우에 대한 가이드라인 마련.

## 5. 기대 효과
- **품질 향상**: 각 에이전트가 한 가지 일에 집중하므로 결과물의 품질이 비약적으로 향상됨.
- **유연성**: 특정 파일 형식(예: CSV) 지원 추가 시 `formatting-agent`만 수정하면 됨.
- **디버깅**: 어느 단계에서 실패했는지 명확히 파악 가능.
