# Contributing Guide

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>= 18.17.0)
- [Yarn](https://yarnpkg.com/en/docs/install) (>= 3.6.1)

### Installation

```bash
# clone the repo
$ git clone https://github.com/banzzac/banzzac-client.git

# change the working directory to banzzac-client
$ cd banzzac-client

# install the dependencies
$ yarn install
```

### Running the app

```bash
$ yarn dev
```


<br/>
<br/>


# Convention

## Commit Convention

- [Atomic Git Commit](https://www.aleksandrhovhannisyan.com/blog/atomic-git-commits/)을 지향해요.
    - 가능한 작은 단위로 커밋해요.
### Commit Message
> [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- 기본적으로 [Conventional commits](https://www.conventionalcommits.org/) 스펙을 따라 커밋 메시지를 작성해요.
- 제목(summary)은 <b>가능한</b> 50자 이내로 작성해요. ([50/72 rule](https://preslav.me/2015/02/21/what-s-with-the-50-72-rule/))


<details>

#### Format
```
<type>: <description>

[optional body]
```

#### Type & Description

| Type      | Description        |
| --------- | ------------------ |
| feat  | 새로운 기능 추가        |
| fix   | 버그 수정      |
| docs      | 문서 수정                |
| style    | 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우 |
| refactor | 코드 리팩토링         |
| test     | 테스트 코드, 리팩토링 테스트 코드 추가 |
| chore    | 빌드 업무 수정, 패키지 매니저 수정(버전 업데이트 포함), 린트 규칙 변경 등 |
| ci       | CI 설정 수정   |
| perf     | 성능 개선  |
| revert   | 작업 되돌리기  |


#### Body

- 어떻게 보다는 무엇을, 왜 변경했는지를 간략하게 작성해요.
- 작성지 않아도 되는 경우 생략해요.

#### Examples

```
feat: 로그인 페이지에 회원가입 버튼 추가
```
```
fix: 로그인 버튼이 눌리지 않는 문제 수정
```


</details>


<br/>


## Pull Request

- 가능한 작은 단위로 PR을 보내요.
- *TODO: PR 템플릿 추가*

### Review
> [Google's Code Review Developer Guide
](https://google.github.io/eng-practices/review/)

- 구글 코드 리뷰 가이드를 참고해요.
- 기본적으로 [Conventional comments](https://conventionalcomments.org/) 스펙을 따라 리뷰해요.


<br/>
<br/>


# Workflow

## Branch

- `main`: 배포용 브랜치

## [GitHub Flow](https://docs.github.com/ko/get-started/quickstart/github-flow)

1. `main` 브랜치에서 `feature` 브랜치를 생성해요.
2. `feature` 브랜치에서 작업을 진행해요.
3. 작업이 완료되면 `main` 브랜치로 `Pull Request`를 보내요.
4. `Pull Request`를 리뷰하고 `main` 브랜치에 `merge`해요.

> 참고: [Git flow vs GitHub flow vs GitLab flow](https://ujuc.github.io/2015/12/16/git-flow-github-flow-gitlab-flow/)