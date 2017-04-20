import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let Items = [
      {
        id: 1,
        name: `PostName1`,
        text: '\t Angular module helps you organize an application into cohesive blocks of functionality. An Angular module\
identifies the components, directives, and pipes that the application uses along with the list of external\
Angular modules that the application needs, such as FormsModule. Every Angular application has an application \
root-module class. By convention, the class is called AppModule and resides in a file named app.module.ts.\
\n\t For details and examples, see the Angular Modules (NgModule) page.',
        date: new Date("03.01.2017")
      },
      {
        id: 2,
        name: `PostName2`,
        text: '\t Attribute directives is a category of directive that can listen to and modify the behavior of other HTML \
elements, attributes, properties, and components. They are usually represented as HTML attributes, hence \
the name. For example, you can use the ngClass directive to add and remove CSS class names.',
        date: new Date("03.02.2017")
      },
      {
        id:3, 
        name: `PostName3`,
        text: '\t Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects \
on the webBootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web',
        date: new Date("03.03.2017")
      },
      {
        id: 4,
        name: `PostName4`,
        text: '\t Applications display data values to a user and respond to user actions (such as clicks, touches, and keystrokes). \
In data binding, you declare the relationship between an HTML widget and data source and let the framework \
handle the details. \n\nData binding is an alternative to manually pushing application data values into HTML, \
attaching event listeners, pulling changed values from the screen, and updating application data values. Angular \
has a rich data-binding framework with a variety of data-binding operations and supporting declaration syntax.',
        date: new Date("03.04.2017")
      },
      {
        id: 5,
        name: `PostName5`,
        text: '\t Angular has its own set of decorators to help it interoperate with your application parts. The following example \
is a @Component decorator that identifies a class as an Angular component and an @Input decorator applied to \
the name property of that component. \n\t The elided object argument to the @Component decorator would contain the pertinent component metadata.',
        date: new Date("03.05.2017")
      },
      {
        id:6, 
        name: `PostName6`,
        text: '\t Interpolation is a form of property data binding in which a template expression between double-curly braces \
renders as text. That text may be concatenated with neighboring text before it is assigned to an element property or displayed \
between element tags, as in this example.',
        date: new Date("03.06.2017")
      },
      {
        id:7, 
        name: `PostName7`,
        text: '\t Component is an Angular class responsible for exposing data to a view and handling most of the view’s display \
and user-interaction logic. The component is one of the most important building blocks in the Angular system. \
\nIt is, in fact, an Angular directive with a companion template. Apply the @Component decorator to the component \
class, thereby attaching to the class the essential component metadata that Angular needs to create a component instance and \
render the component with its template as a view',
        date: new Date("03.07.2017")
      }
    ];
    return {Items};
  }
}
