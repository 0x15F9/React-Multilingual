import React from 'react';

const About = () => {
    return(
        <div>
            <div class="card large">
                <div class="card-image">
                    <img alt="Desert" src="https://cdn.pixabay.com/photo/2017/11/21/22/10/desert-2969368_960_720.jpg" />
                    <span class="card-title">About Page</span>
                </div>
                <div class="card-content">
                    <p>
                        This should be transalated.
                    </p>
                    <code>
                    Yes, I am a criminal.  My crime is that of curiosity.  My crime is
that of judging people by what they say and think, not what they look like.
My crime is that of outsmarting you, something that you will never forgive me
for.
                    </code>
                    <p>Taken from The Conscience of a Hacker</p>
                </div>
            </div>
        </div>
    )
}

export default About;