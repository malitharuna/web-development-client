import React from 'react';

const Faq = () => {
    return (
        <div className='mx-auto text-center p-10'>
            <h2 className='text-2xl mb-3'>What is a web developer?</h2>
            <p>A web developer is a programmer who makes websites, and apps for the World Wide Web. A web developer builds a website from the bottom up, developing everything from layout to functions and features on the page.
                A good web developer can make almost anything happen on a website, and can build custom code to accommodate the needs of their client. Web developers have an intricate understanding of various programming languages and how they’re used.</p>

            <h2 className='text-2xl mb-3'>Are a web developer and a web designer the same thing?</h2>
            <p>A web developer is more concerned with functionality and features of a website, and versed in the programming languages required to create them. Web developers will still need to understand the aesthetics and art direction of the site as they implement features.

                A web designer will create the logos, graphics, and layout that determine the look and feel of a website. Web designers will use software like Adobe Photoshop and Illustrator to create these materials. A web designer with a knowledge of code can help him/her better communicate with the web developer.</p>

            <h2 className='text-2xl mb-3'>What does web development entail exactly?
            </h2>
            <p>Web development isn’t just building what the user sees. There’s a lot underneath the hood of a modern website, and a good web developer can traverse across the entire terrain. <br />

                Client-Side languages: <br />

                <ul>
                    <li> HTML</li>
                    <li> CSS</li>
                    <li>JavaScript</li>
                    <li>Jquery</li>
                </ul><br />

                Server-side scripting: <br />
                <ul>


                    <li> ASP.NET</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>PHP</li>
                    <li>Python</li>
                    <li>Ruby</li>
                </ul>
            </p>

            <h2 className='text-2xl mb-3'>What makes a good web developer?</h2>
            <p>It takes more than an awesome portfolio to score a full-time web developer position at a company. You can do the work well, but can you work well with the company?

                Here’s what hiring managers are looking for:

                The skillset. You’ll need to have a great grasp of the programming languages and frameworks to get around in your job (see above). Smart companies are looking to continually improve their processes, which means the code you’re using will constantly be changing. You’ll need to keep up.

                Willingness to keep learning. Don’t be stuck in the way you’ve always done things. The industry moves at an exponential rate, so web developers need to be on the cutting edge of all web technology. Plus, your knowledge will give more ability to teach others on your team.</p>
                <br />
            <h2 className='text-2xl mb-3'> What are some web development tips for junior devs?</h2>
            <p>Look at lots of good websites, and figure out how they work. A little inspiration goes a long way. The website awwwards.com showcases the latest in web design on a daily basis.

                Learn from those with lots of web dev experience. These more experienced web developers can help you maneuver in the world of web development–not only can they share insights that only those with a lot of experience would know, but they can also give you a better idea of what’s to come.

                Comment your code. This is especially important for junior developers who are still learning the ropes on web development. Commenting code ensures that the whole team will understand your code. Don’t go overboard, though– too much commenting makes the code messier. And if the code gets updated, the comments need to be, too.

                Build stuff. The insights you learn from making (and breaking) your own website cannot be taught by anyone. Now is the time to start building pieces for your portfolio. Sign up for Github and download a project, then take it apart and put it together your own way. Study the source code.</p>
        </div>
    );
};

export default Faq;