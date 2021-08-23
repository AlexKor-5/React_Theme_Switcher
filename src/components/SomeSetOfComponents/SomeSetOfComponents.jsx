import React from "react";

export const SomeSetOfComponents = () => {
    return (
        <div className={"page"}>
            <div className="page__title">
                <h1>Lorem ipsum dolor sit amet.</h1>
            </div>
            <div className="page__sub-title">
                <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, porro.</h3>
            </div>
            <div className="page__paragraph">
                {my_paragraphs.map((Paragraph) => Paragraph)}
            </div>
            <div className="page__block">block</div>
        </div>
    )
}

let my_paragraphs = [];
for (let i = 0; i < 3; i++) {
    let my_p = <p key={i}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid aut consectetur
        deserunt eum expedita facilis inventore laboriosam magnam mollitia obcaecati quae quas reprehenderit
        sed, similique voluptate voluptatum! Culpa ducimus eius error expedita facilis ipsam quidem vitae!
        Accusantium animi aperiam aut dolores ducimus eaque eveniet illum iste minus non nulla, numquam
        obcaecati officiis perferendis sequi sint sit tenetur, ullam vel voluptatum. Ad architecto commodi,
        culpa cum cupiditate delectus expedita facilis fuga, ipsa iste iure minima minus molestias officia
        omnis placeat quidem reiciendis sint soluta totam, unde vel vero! Eius esse ipsam nesciunt non
        provident. Beatae dolores eum incidunt libero placeat provident quam reprehenderit sequi suscipit,
        voluptate. Atque cum magni unde? A ab deserunt dolorum earum est impedit ipsa iure laborum quas vel.
        Accusantium ad, amet distinctio eius facere facilis ipsam ipsum molestias nemo nostrum possimus
    </p>
    my_paragraphs.push(my_p);
}