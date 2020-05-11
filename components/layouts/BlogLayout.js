import React from "react";
import FlexView from 'react-flexview'

export default ({ children, postData }) => (
    <div className="blog-layout">
        <h1>{postData.title}</h1>
        <FlexView style={{display: 'block'}}>
            <span style={{fontSize: 16}}>{postData.publishDate}</span>
        </FlexView>
        {children}
        <style jsx>{`
            margin: auto;
        `}</style>
    </div>
);
