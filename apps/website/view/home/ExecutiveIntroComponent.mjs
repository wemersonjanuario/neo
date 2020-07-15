import {default as Component} from '../../../../src/component/Base.mjs';

/**
 * @class Website.view.home.ExecutiveIntroComponent
 * @extends Neo.component.Base
 */
class ExecutiveIntroComponent extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.home.ExecutiveIntroComponent'
         * @protected
         */
        className: 'Website.view.home.ExecutiveIntroComponent',
        /**
         * @member {String[]} cls=['website-intro-component']
         * @protected
         */
        cls: ['website-intro-component'],
        /**
         * @member {Object[]} domListeners
         * @protected
         */
        domListeners: [{
            click   : 'onNavLinkClick',
            delegate: '.nav-link'
        }],
        /**
         * For dynamic structures, you would use the JSON based syntax
         * @member {Object} vdom
         */
        vdom: {innerHTML: [
            '<h1>Content</h1>',
            '<ol>',
                '<li><a class="nav-link" data-target="exec-nav-1">Introduction</a></li>',
                '<li>',
                    '<a class="nav-link" data-target="exec-nav-2">Current pain points inside the UI sector</a>',
                    '<ul>',
                        '<li>2.1 <a class="nav-link" data-target="exec-nav-2.1">Performance</a></li>',
                        '<li>2.2 <a class="nav-link" data-target="exec-nav-2.2">Multi Browser Window Apps</a></li>',
                        '<li>2.3 <a class="nav-link" data-target="exec-nav-2.3">Developing UIs inside nodejs</a></li>',
                        '<li>2.4 <a class="nav-link" data-target="exec-nav-2.4">Scalable Architectures</a></li>',
                        '<li>2.5 <a class="nav-link" data-target="exec-nav-2.5">Memory Leaks</a></li>',
                        '<li>2.6 <a class="nav-link" data-target="exec-nav-2.6">No Templates</a></li>',
                        '<li>2.7 <a class="nav-link" data-target="exec-nav-2.7">Consistent Code</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="nav-link" data-target="exec-nav-3">Sponsorship</a></li>',
                '<li>',
                    '<a class="nav-link" data-target="exec-nav-4">The planned Business Model (BaaS)</a>',
                '<ul>',
                    '<li>4.1 <a class="nav-link" data-target="exec-nav-4.1">Professional Services</a></li>',
                    '<li>4.2 <a class="nav-link" data-target="exec-nav-4.2">Trainings</a></li>',
                    '<li>4.3 <a class="nav-link" data-target="exec-nav-4.3">Support</a></li>',
                    '</ul>',
                '</li>',
                '<li><a class="nav-link" data-target="exec-nav-5">You can influence the neo.mjs roadmap</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-6">Do you need help creating a prototype App for your use case?</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-7">What is the long term goal?</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-8">Can I join as an investor?</a></li>',
                '<li><a class="nav-link" data-target="exec-nav-9">How to get in touch?</a></li>',
            '</ol>',
            '<h1 class="nav-target" id="exec-nav-1">1. Introduction</h1>',
            '<p>',
                'neo.mjs is the next generation UI framework for creating desktop & mobile Web Apps. ',
                'It has a very strong focus on performance and creating scalable & modular architectures. ',
                'A clean & consistent API, as well as the ability to run without any build processes, ',
                'will increase the productivity of your team, while creating better solutions at the same time.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-2">2. Current pain points inside the UI sector</h1>',
            '<ol>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.1">Performance</b>',
                    '<p>',
                        '<b>Problem:</b> While current libraries / frameworks like Angular, React or Vue provide a reasonable performance for ',
                        'small or mostly static Apps, they lack when it comes to big Apps or complex Components. ',
                        'The problem is, that most Apps today run within a single thread (CPU), while each computer or mobile ',
                        'device has several CPUs available. Some Apps move expensive tasks into separate threads, but this ',
                        'is by far not enough.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, most parts of the framework as well as the Apps which you create ',
                        'with it, run inside a separate thread. This architecture leaves the main thread mostly idle, so ',
                        'it can fully concentrate on its purpose: to only manipulate the real DOM (HTML). Expensive tasks ',
                        'simply can not interfere with your animations or even freeze your UI.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.2">Multi Browser Window Apps</b>',
                    '<p>',
                        '<b>Problem:</b> Expanding Single Page Apps into multiple Browser Windows is simply impossible ',
                        'with any other library or framework out there.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can do it today. With the SharedWorkers setup, you can not ',
                        'only directly communicate between Windows, but you can move entire Component trees around, ',
                        're-using the same JS instances and no need to care about DOM events. This architecture will rock ',
                        'on mobile devices as well, as soon as the Webkit team catches up. Imagine a Native Shell using ',
                        'multiple WebViews. Take a look at:',
                    '</p>',
                    '<p>',
                        '<a target="_blank" href="https://medium.com/swlh/expanding-single-page-apps-into-multiple-browser-windows-e6d9bd155d59?source=friends_link&sk=bbfe1dada95c5674669e463f93360822">Expanding Single Page Apps into multiple Browser Windows</a>',
                    '</p>',
               '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.3">Developing UIs inside nodejs</b>',
                    '<p>',
                        '<b>Problem:</b> nodejs evolved faster than JS inside Browsers, but did not stick to W3C standards. ',
                        'Libraries / frameworks like Angular, React & Vue picked this up and moved the entire UI development ',
                        'into nodejs. This allows developers to use ES6+ features like classes & JS modules, but at an extremely ',
                        'high cost: every change inside your code base requires a build or transpilation, before you can see it. ',
                        'An entire ecosystem evolved, like hot module replacements & using source maps to reduce the pain point a bit.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> In a couple of years, we will most likely look back at this madness and laugh. Calling it ',
                        '"a hiccup in the history of Web Development". Browsers did catch up. Using neo.mjs, you can run the Development ',
                        'Mode directly inside the Browser. No build processes or source maps needed. You can debug the real ES8+ code. ',
                        'This has saved me a lot of time already, since it is the best possible debugging experience.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.4">Scalable Architectures</b>',
                    '<p>',
                        '<b>Problem:</b> While scalability is an important item inside the backend area (Cloud), it got mostly ',
                        'ignored on the frontend side so far.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> With the current worker setup, you already have a solid starting point. We can further enhance this, ',
                        'if needed. E.g. add a second Vdom worker, in case this one is a bottle-neck. You can stick to common ',
                        'patterns like MVC or MVVM, if you like to. You can create multiple Apps on one page and with using ',
                        'JS Modules, you can lazy load classes => packages as needed.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.5">Memory Leaks</b>',
                    '<p>',
                        '<b>Problem:</b> Destroying & re-creating Component Trees can easily lead to memory leaks. Especially in case the destruction ',
                        'logic of self created Components is not fully polished.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> Using neo.mjs, you can easily re-use existing ',
                        'JS instances and just unmount & re-mount their (V)DOM. You can easily move Components Trees to different ',
                        'spots inside your App as well.',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.6">Templates</b>',
                    '<p>',
                        '<b>Problem:</b> Close to all current libraries / frameworks out there are template driven. Developers have to create ',
                        'a compact, but very messy pseudo XML markup. Variables and methods get mixed into them, with various ',
                        'combinations of brackets. Especially complex Components like a Grid (Table) can contain over 1000 lines ',
                        'including big amounts of template if & else statements. While you can compile them at build time (e.g. Svelte), ',
                        'they are very static. Changes at runtime',
                        'this leaves',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> There are no templates inside neo.mjs. Instead, you create a JSON based virtual DOM tree ',
                        '(a bit similar to creating a simplified JSX output). You can dynamically change these structures any way ',
                        'you like to. There is no need for parsing the structures, since JS is meant to work with objects & arrays. ',
                        'The performance gain for run-time changes is significant. The best part is that you can modify the vdom tress ',
                        'exactly the same way throughout the entire Component lifecycle (e.g. before & after mounting).',
                    '</p>',
                '</li>',
                '<li>',
                    '<b class="nav-target" id="exec-nav-2.7">Consistent Code</b>',
                    '<p>',
                        '<b>Problem:</b> Especially when working with libraries (e.g. React), you don\'t get everything you need ',
                        'for creating an UI. You will need several 3rd party extensions, which won\'t provide a consistent code ',
                        'base. Another big problem is, that libraries like React do not expose a core. Component is the base class ',
                        'for everything and this makes no sense. A router, controller or utility class does not have a DOM output, ',
                        'so they really should not use Component as the base class.',
                    '</p>',
                    '<p>',
                        '<b>Solution:</b> neo.mjs is a framework, not a library. The core is exposed (core.Base). There are already ',
                        'a big amount a classes available, which follow the same design patterns & API. neo.mjs is created with a ',
                        'strong focus on being extendable. It is very easy to create new Components or other classes on your own.',
                    '</p>',
                '</li>',
            '</ol>',
            '<h1 class="nav-target" id="exec-nav-3">3. Sponsorship</h1>',
            '<p>',
                'The entire neo.mjs ecosystem, including all examples & Demo Apps is open sourced (MIT licensed). ',
                'You can use it for free. However, creating a framework of this complexity is taking a massive amount ',
                'of time and effort on my end and will continue to do so.',
            '</p>',
            '<p>',
                'Please ask yourself the following 2 questions:',
            '</p>',
            '<ol>',
                '<li>Does neo.mjs create business value for your company?</li>',
                '<li>Will it create business value for your company in the future?</li>',
            '</ol>',
            '<p>',
                'In case the answer for at least one of them is "Yes", please consider supporting the project as a sponsor:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://github.com/sponsors/tobiu">Sign up as a sponsor</a>',
            '</p>',
            '<p>',
                'This will enable me to spend more time on neo.mjs, so you will get new widgets, features and bugfixes ',
                'a lot faster. Your company logo & link will get added to different places depending on the tier level, ',
                'which will increase your reputation inside the neo.mjs developer community.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-4">4. The planned Business Model (BaaS)</h1>',
            '<p>',
                'Business as a Service means to provide you with additional help, if needed.',
                '<ol>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.1">Professional Services</b></br>',
                        'In case you need help with your App development, code reviews or even new framework components, ',
                        'themes or features which do not exist yet, the PS team will be there for you. ',
                        'Remote help is available for €150/h, onsite help for €200/h (plus travel & lodging costs). ',
                        'VAT (if applicable) is not included.',
                    '</li>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.2">Trainings</b></br>',
                        'While you can learn using neo.mjs with following the publicly available tutorials, ',
                        'it can be a nicer and more productive learning experience to get an onsite training. ',
                        '6 - 15 attendees, 1 week (5 * 8 hours). ',
                        'I have moderated several UI framework related trainings in the past, ',
                        'so I have a very good idea on how it should work.',
                    '</li>',
                    '<li>',
                        '<b class="nav-target" id="exec-nav-4.3">Support</b></br>',
                        'In case you need a guaranteed response time for your questions & tickets, there will be support ',
                        'packages to ensure this. The exact details are not figured out yet.',
                    '</li>',
                '</ol>',
            '</p>',
            '<p>',
                'In case the BaaS options are interesting for you, you are very welcome to reach out to me.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-5">5. You can influence the neo.mjs roadmap</h1>',
            '<p>',
                'In my opinion, a library like React is designed to best fit the needs of Facebook. ',
                'As a true open source project, the future development of the neo.mjs framework is intended to focus on ',
                '<b>your</b> needs as good as possible. To make this happen, it is important to create new tickets or ',
                'comment on existing ones:',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://github.com/neomjs/neo/issues">neo.mjs issues tracker</a>',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-6">6. Do you need help creating a prototype App for your use case?</h1>',
            '<p>',
                'Figuring out if neo.mjs is a good fit for your project can be tricky. Several impressive Demo Apps ',
                'exist already, but these can obviously not cover all possible areas. In case you do need help creating a ',
                'prototype App which fits your use case, feel free to reach out. This way, you can create perfect benchmarks ',
                'on your own to compare the various framework / library options out there.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-7">7. What is the long term goal?</h1>',
            '<p>',
                'From a project perspective, the goal is to further enhance the framework (there are a lot more items on ',
                'the roadmap), to provide you with even more widgets & features.',
            '</p>',
            '<p>',
                'From a business perspective, I am not aiming for a quick exit. My goal is to create a team of 10 - 20 ',
                'full time employees (creating new jobs).',
            '</p>',
            '<p>',
                '<b>Both aspects are leading to the ultimate goal:</b></br>',
                'Creating long lasting client relationships, ',
                'to make <b>your</b> User Interface development as successful as possible.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-8">8. Can I join as an investor?</h1>',
            '<p>',
                'Right now, the preferred way to support the neo.mjs project is to sign up as a sponsor. ',
                'However, I am open minded. In case you can provide a very strong value on the business side, ',
                'we can definitely talk. I am not looking for investors who only want to drop in money.',
            '</p>',
            '<h1 class="nav-target" id="exec-nav-9">9. How to get in touch?</h1>',
            '<p>',
                'Feel free to send me a contact request or a private message on LinkedIn. ',
                'You are welcome to take a closer look into my professional experience (e.g. recommendations) as well.',
            '</p>',
            '<p>',
                '<a target="_blank" href="https://www.linkedin.com/in/tobiasuhlig/">Tobias Uhlig\'s LinkedIn Profile</a>',
            '</p>'
        ].join('')}
    }}
}

Neo.applyClassConfig(ExecutiveIntroComponent);

export {ExecutiveIntroComponent as default};