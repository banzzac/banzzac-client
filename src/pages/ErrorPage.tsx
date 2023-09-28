import { useRouteError } from "react-router-dom";

/**
 * 에러 페이지입니다
 *
 */
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>이런!</h1>
      <p>정상적인 경로가 아닌걸요? 꼬우면 돌아가세요~</p>
      <p>
        <i>{(error as any).statusText || (error as any).message}</i>
      </p>
    </div>
  );
}
