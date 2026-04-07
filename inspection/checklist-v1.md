inspection/checklist-v1.md(현재 파일) 를 참고해서 올바르게 구현했는지 검증하고, 그렇지 않다면 planning/plan.md 에 수정할 내용이 있다면 수정해서 작업을 진행하고, process 내에 추가로 작업한 내용들을 적절한 md 파일로 작성해서 설명하세요. process 내의 내용들은 한글로 작성하세요.


- [ ] gemini cli 로 접속해서 /teb:ppt-slides test/samples/slide-images/mtn {특정 output path/결과물.md} 명령을 수행했을 때 해당동작이 동작하나요? `output path` 디렉터리가 없을 경우 만들고 `{특정 output path/결과물.md}` 출력물이 만들어지나요? 그렇지 않다면 수정해야합니다.
- [ ] gemini cli 로 접속해서 /teb:pdf-images test/samples/pdf-images {특정 output path/결과물.md} 명령을 수행했을 때 해당동작이 동작하나요? `output path` 디렉터리가 없을 경우 만들고 `{특정 output path/결과물.md}` 출력물이 만들어지나요? 그렇지 않다면 수정해야합니다.


- [ ] `./.gemini` 내에 skill 이 정상적인 위치에 존재하나요? (e.g. `./.gemini/skills/teb`) 현재 프로젝트 디렉터리에서만 동작하는 스킬이어야 하기에 `~/.gemini/...` 를 의미하는 것이 아님을 기억하세요.
