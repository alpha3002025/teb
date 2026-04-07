# Phase 4: Formatting & Output Verification

## 1. 출력 포맷터 구현
- [x] `scripts/formatter.js`: 추출 및 요약 결과를 `.md`, `.txt`, `.toml` 등 요청한 포맷으로 변환하고 저장하는 로직 구현 및 검증 완료.

## 2. 포맷별 처리 로직 검증 결과
- **MD (.md)**: 마크다운 구조 그대로 보존하여 파일 생성 가능.
- **TXT (.txt)**: 마크다운 특수 기호(#, *, [])를 제거한 순수 텍스트로 변환하여 생성 가능.
- **TOML (.toml)**: TOML 형식(`result = """ ... """`)에 맞춰 구조화된 텍스트로 저장 가능.

## 3. 검증 결과 (Verification Results)
- 지정된 출력 경로에 올바른 확장자로 파일이 생성됨.
- 내용 변환 단계에서 인코딩 깨짐 없이 한글과 영문 모두 정상적으로 파일에 기록됨.

---
**다음 단계**: Phase 5 (Polishing & Testing - 전체 통합 테스트 및 에러 처리)
