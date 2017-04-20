import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let Items = [
      {
        id: 1,
        name: `PostName1`,
        text: `In January 2009 the three founders of a little-known website called Airbedandbreakfast.com
               decided at the last minute to attend the inauguration of Barack Obama. Brian Chesky, Joe Gebbia, 
               and Nathan Blecharczyk were all in their mid-20s and had no tickets to the festivities, or winter 
               clothes, or even a firm grasp of the week’s schedule. But they saw an opportunity. Their online 
               home-sharing company had limped along for more than a year with little to show for it. Now the 
               eyes of the world would be on the nation’s capital, and they wanted to take advantage.`,
        date: new Date("03.01.2017")
      },
      {
        id: 2,
        name: `PostName2`,
        text: `Earlier on Tuesday, Jeff Holden, the chief product officer at Uber, said the ride-hailing industry
               would change “when the money train stops.” In an interview at the Bloomberg Technology Conference 
               in San Francisco, Holden highlighted a “very distorted capital market.” He said: “When the tide goes
                out, we’ll see who makes it.”`,
        date: new Date("03.02.2017")
      },
      {
        id:3, 
        name: `PostName3`,
        text: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the webBootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web',
        date: new Date("03.03.2017")
      },
      {
        id: 4,
        name: `PostName4`,
        text: 'In January 2009 the three founders of a little-known website called Airbedandbreakfast.com decided at the last minute to attend the inauguration of Barack Obama. Brian Chesky, Joe Gebbia, and Nathan Blecharczyk were all in their mid-20s and had no tickets to the festivities, or winter clothes, or even a firm grasp of the week’s schedule. But they saw an opportunity. Their online home-sharing company had limped along for more than a year with little to show for it. Now the eyes of the world would be on the nation’s capital, and they wanted to take advantage.',
        date: new Date("03.04.2017")
      },
      {
        id: 5,
        name: `PostName5`,
        text: 'Earlier on Tuesday, Jeff Holden, the chief product officer at Uber, said the ride-hailing industry would change “when the money train stops.” In an interview at the Bloomberg Technology Conference in San Francisco, Holden highlighted a “very distorted capital market.” He said: “When the tide goes out, we’ll see who makes it.”',
        date: new Date("03.05.2017")
      },
      {
        id:6, 
        name: `PostName6`,
        text: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the webBootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web',
        date: new Date("03.06.2017")
      },
      {
        id:7, 
        name: `PostName7`,
        text: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the webBootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web',
        date: new Date("03.07.2017")
      }
    ];
    return {Items};
  }
}
