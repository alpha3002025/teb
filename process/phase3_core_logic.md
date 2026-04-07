# Phase 3: Core Logic (Gemini 연동 프롬프트 설계) Verification

## 1. 프롬프트 템플릿 설계 및 저장
- [x] `templates/extract_slides.md`: PPT 슬라이드 텍스트 추출을 위한 구조화된 프롬프트.
- [x] `templates/brief_slides.md`: PPT 슬라이드 요약(핵심 논점, 개요 등)을 위한 프롬프트.
- [x] `templates/extract_pdf.md`: PDF 페이지 텍스트 추출(Verbatim)을 위한 프롬프트.
- [x] `templates/brief_pdf.md`: PDF 페이지 요약(주장, 상세 분석 등)을 위한 프롬프트.

## 2. 작업 처리 핸들러 (Handler Logic)
- 스킬이 활성화되면 AI는 입력된 이미지들과 함께 각각의 템플릿 프롬프트를 사용하여 결과를 생성함.
- `SKILL.md`에 각 기능별 명령어(`/teb:ppt-slides`, `/teb:pdf-images`)와 프롬프트 연동 구조를 정의함.

## 3. 검증 결과 (Verification Results)
- 총 4개의 프롬프트 템플릿 파일이 `templates/` 디렉토리에 정확히 생성됨.
- 각 템플릿은 목적(추출 vs 요약)과 매체(PPT vs PDF)의 특성을 반영함.

---
**다음 단계**: Phase 4 (출력 포맷팅 및 파일 생성 로직 구현)
