# Crypto Tracker

## Overview

- [링크](https://insikdev.github.io/react-coin/)
- Coinpaprika API 사용
- 검색 기능 추가 예정

## Features

- `/`
  - 시가총액 순으로 정렬된 암호화폐 목록 표시 (1페이지당 20개, 총 20페이지)
- `/:id`
  - 암호화폐 정보를 표시
- `/:id/chart`
  - 14일치 데이터(시가, 고가, 저가, 종가)를 candlestick 차트로 시각화
- `/:id/price`
  - 14일치 데이터(종가)를 전일대비 퍼센트로 계산하여 표시

## Dependencies

- `create-react-app-typescript`
- `react-query`
- `react-router-dom`
- `styled-components`
- `react-apexcharts`

## Note

### 1. react query

- query key를 바탕으로 데이터를 캐싱하여 관리
- isLoading, data, retch

### 2. styled-components

- ThemeProvider -> component에서 props로 접근 가능 (`styled.d.ts` 필수)
- state와 연동하여 theme 변경 -> 라이트/다크 모드 구현

### 3. react-router-dom

- `<Outlet />` -> nested UI 구현

### 4. Intl

- 각 언어에 맞는 서식을 제공하는 JS 내장 객체
- 값을 통화 표시 형식으로 변환 가능

```
new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(number)
```
