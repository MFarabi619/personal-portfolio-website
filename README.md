# personal-portfolio-website
A website to showcase my skills and projects, thus acting as a digital resume. 

[Visit Website](https://mfarabi.dev)
![Image](https://i.ibb.co/BNhLVyW/Demo-image.jpg)


Learning log:

- Detected scroll event, and used it as a multiplier for image elements to create a parallax scrolling effect.
- Quickly realized that setting fixed sizes to elements is not a good idea and makes them unresponsive. 
- Scaling text with viewport width adds some responsiveness, but they get too big or too small at extreme screen sizes. Therefore the clamp(), min(), and max() functions should be used. 
- Avoid using media queries as much as possible. Look to use flexbox and grid. 
- Design for mobile first.
- Having margins is important.
- Look to reduce code by using react components and passing props into them.
- Due to the creation of components, the number of files began to grow quickly. Organized them into folders.
- Using the 'react-scroll' library to enable user navigation to sections of the page by clicking on navbar buttons.
- Setting global CSS variables.
- Setting grid-gap to a % value can cause container overflow. Fixed by using 'em'.
- Using Lighthouse to test for performance metrics.
- Customizing scrollbar.
