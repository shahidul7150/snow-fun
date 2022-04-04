import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='w-2/4 mx-auto mt-20'>
                <h1 className='text-4xl font-bold'>What is context api?</h1>
                <hr className='border-4 mt-5 mb-4' />
                <img src="https://imgs.developpaper.com/imgs/2271126660-5d35c5416b4ce_articlex.png" alt="" />
                <p className='text-2xl text-left'>Context api is a bridge that connect multiple component without passing props.It is alternative props drilling and easily pass data.Context api need a react create context api method and then need provider.It's like as Redux but not same to same as redux.SoIt can help like redux..</p>
            </div>
            <div className='w-2/4 mx-auto mt-20'>
                <h1 className='text-4xl font-bold'>What is Semantic tag?</h1>
                <hr className='border-4 mt-5 mb-4' />
                <img src="https://assets.hongkiat.com/uploads/find-semantic-tags-using-html5-robot/02-example-semantic-tag-html5robot.jpg" alt="" />
                <p className='text-2xl text-left'>Semantic tag is the alternative as not meaning tag but semantic tag is meaningful.It is suitable for SEO a website easily.Some of semantic tag are article,header,form.Semantic tag included from html5.Semantic tag is very helpful and it make code easier to development .HTML5 come with SEO friendly....... </p>
            </div>
        </div>
    );
};

export default Blogs;