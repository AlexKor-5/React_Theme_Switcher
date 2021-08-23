import React from "react";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
// const CssStyles = React.lazy(() => import('../../index.css'));
// console.log(CssStyles);

export const TypicalCss = () => {
    import('../../index.css');
    return (
        <>

        </>
    )
}

// const CssStyles = React.lazy(() => import('../../index.css'));
// export const TypicalCss = () => {
//     return (
//         <>
//             <ErrorBoundary>
//                 <Suspense fallback={<h2>typical css is loading ...</h2>}>
//                     <CssStyles/>
//                 </Suspense>
//             </ErrorBoundary>
//         </>
//     )
// }