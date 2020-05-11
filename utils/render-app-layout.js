import SearchLayout from "../components/layouts/SearchLayout";
import BlogLayout from "../components/layouts/BlogLayout";

export function renderLayout(props, state) {
    const { Component } = props;
    const { postData } = state;
    const { layout } = postData;

    if (!layout || !props.router) return;

    switch (layout) {
        case "post":
            return (
                <BlogLayout postData={postData}>
                    <Component {...props} postData={postData} />
                </BlogLayout>
            );
        case "search":
            return (
                <SearchLayout>
                    <Component {...props} />
                    {/* Put styled-jsx here */}
                </SearchLayout>
            );
        case "blog-post-list":
            return (
                <React.Fragment>
                    <Component {...props} />
                    {/* Put styled-jsx here */}
                </React.Fragment>
            );
        case "page":
        default:
            return (
                <div className="blog-layout">
                    <Component {...props} />
                    {/* Put styled-jsx here */}
                    <style jsx>{`
                        margin: auto;
                    `}</style>
                </div>
            );
    }
}
