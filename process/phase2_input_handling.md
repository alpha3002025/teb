# Phase 2: Input Handling Verification

## 1. 이미지 및 디렉토리 크롤러 구현
- [x] `scripts/crawler.js`: 여러 입력 경로를 받아 유효한 이미지 파일(.png, .jpg, .jpeg, .webp) 목록을 중복 없이 추출하는 로직 구현 및 검증 완료.

## 2. 테스트 데이터 경로 확인
- [x] **pdf-images**: `test/samples/pdf-images` 내 2개의 파일 확인 완료 (`1.png`, `2.png`).
- [x] **slide-images**: `test/samples/slide-images/mtn` 내 9개의 파일 확인 완료 (`1.png` ~ `9.png`).

## 3. 검증 결과 (Verification Results)
- 디렉토리 경로 전달 시 내부의 모든 이미지를 수집함.
- 개별 파일 경로 전달 시 유효한 이미지인지 확장자 체크함.
- 절대 경로로 변환하여 중복 제거 처리됨.

---
**다음 단계**: Phase 3 (Core Logic - Gemini 연동 프롬프트 설계)
