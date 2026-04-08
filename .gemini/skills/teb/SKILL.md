---
name: teb
description: Text Extracting and Briefing skill for PPT slides and PDF page images. Orchestrates specialized agents for extraction, briefing, and formatting.
---

# teb: Text Extracting and Briefing Skill

이 스킬은 PPT 슬라이드 이미지나 PDF 페이지 이미지로부터 텍스트를 추출하고, 핵심 요약 및 인사이트를 제공하는 기능을 수행합니다. 작업의 복잡도에 따라 전문 서브 에이전트들을 호출하여 최적의 결과를 도출합니다.

## 주요 기능

### 1. ppt-slides
PPT 슬라이드 이미지들로부터 텍스트를 추출하거나 내용을 정리합니다.

- **텍스트 추출 모드 (`--extracting`)**: `teb-extract-agent`를 호출하여 슬라이드의 모든 텍스트를 구조화하여 추출합니다.
- **통찰 모드 (`--briefing`)**: `teb-briefing-agent`를 호출하여 슬라이드 전체의 흐름과 핵심 메시지를 요약합니다.

### 2. pdf-images
책이나 문서의 페이지 이미지들로부터 텍스트를 추출하거나 내용을 정리합니다.

- **텍스트 추출 모드 (`--extracting`)**: `teb-extract-agent`를 호출하여 이미지 내의 텍스트를 원형 그대로 추출합니다.
- **통찰 모드 (`--briefing`)**: `teb-briefing-agent`를 호출하여 페이지의 주요 논제와 상세 분석 내용을 요약합니다.

## 지원 옵션 및 포맷

- **모드 옵션**: `--extracting` (추출), `--briefing` (요약)
- **출력 포맷 (`--output-format`)**: `md` (기본), `txt`, `toml`

## 사용 방법 (Workflow)

1. **에이전트 호출**:
   - 추출 모드 시: `teb-extract-agent`를 호출합니다.
   - 통찰 모드 시: `teb-briefing-agent`를 호출합니다.
2. **포맷팅**:
   - 생성된 결과물을 `teb-formatting-agent`에 전달하여 요청된 포맷(`md`, `txt`, `toml`)으로 변환합니다.
3. **저장**:
   - 최종 결과물을 지정된 출력 파일 경로에 저장합니다.

## Commands

### `/teb:ppt-slides`
사용법: `/teb:ppt-slides [--extracting|--briefing] [--output-format md|txt|toml] <image_paths...> <output_file_path>`
예시: `/teb:ppt-slides --extracting --output-format md ./slide-images output/result.md`

### `/teb:pdf-images`
사용법: `/teb:pdf-images [--extracting|--briefing] [--output-format md|txt|toml] <image_paths...> <output_file_path>`
예시: `/teb:pdf-images --briefing --output-format toml ./page-images output/result.toml`
