만들려는 것: gemini cli skill

만들려는 skill 명 : 'teb' (text-extracting-briefing)

## 기능 (1) : ppt-slides
(ppt-slides) ppt 슬라이드 이미지 n 개의 텍스트 추출 or 내용정리 기능<br/>

텍스트 추출 모드<br/>
- `--extracting`

통찰모드<br/>
- `--briefing`

결과 파일타입<br/>
- `.md`
- `.txt`
- `.toml`

<br/>

e.g.
```bash
/teb:ppt-slides --extracting --output-format md slide1.png slide2.png outputfile.md
/teb:ppt-slides --extracting --output-format md ./slide-images outputfile.md
/teb:ppt-slides --extracting --output-format md ./slide-images ./slide-images2 outputfile.md

/teb:ppt-slides --briefing --output-format md slide1.png slide2.png outputfile.md
/teb:ppt-slides --briefing --output-format md ./slide-images outputfile.md
/teb:ppt-slides --briefing --output-format md ./slide-images ./slide-images2 outputfile.md
```

<br/>

## 기능 (2) : pdf-images
(pdf-images) 책의 페이지 이미지 n개에 대해 텍스트 추출 or 내용정리 기능<br/>

텍스트 추출 모드<br/>
- `--extracting`

통찰모드<br/>
- `--briefing`

파일타입<br/>
- `.md`
- `.txt`
- `.toml`

<br/>

e.g.
```bash
/teb:pdf-images --extracting --output-format md page1.png page2.png outputfile.md
/teb:pdf-images --extracting --output-format md ./page-images outputfile.md
/teb:pdf-images --extracting --output-format md ./page-images ./page-images2 outputfile.md

/teb:pdf-images --briefing --output-format md page1.png page2.png outputfile.md
/teb:pdf-images --briefing --output-format md ./page-images outputfile.md
/teb:pdf-images --briefing --output-format md ./page-images ./page-images2 outputfile.md
```

<br/>
