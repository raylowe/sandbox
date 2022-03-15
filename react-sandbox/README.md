# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





For REFERENCE:
THe above example passes some properties to the <ReactModal> via ...props
To see the list of avaialbe properties and what they do, see the exampded <ReactModal>
object below.



<ReactModal
    isOpen={
        /* Boolean describing if the modal should be shown or not. */
        modalIsOpen
    }

    onAfterOpen={
        /* Function that will be run after the modal has opened. */
        handleAfterOpenFunc
    }

    onAfterClose={
        /* Function that will be run after the modal has closed. */
        handleAfterCloseFunc
    }

    onRequestClose={
        /* Function that will be run when the modal is requested
        to be closed (either by clicking on overlay or pressing ESC).
        Note: It is not called if isOpen is changed by other means. */
        handleRequestCloseFunc
    }

    closeTimeoutMS={
        /* Number indicating the milliseconds to wait before closing
        the modal. */
        0
    }

    style={
        /* Object indicating styles to be used for the modal.
        It has two keys, `overlay` and `content`.
        See the `Styles` section for more details. */
        { overlay: {}, content: {} }
    }

    contentLabel={
        /* String indicating how the content container should be announced
        to screenreaders */
        "Example Modal"
    }

    portalClassName={
        /* String className to be applied to the portal.
        See the `Styles` section for more details. */
        "ReactModalPortal"
    }

    overlayClassName={
        /* String className to be applied to the overlay.
        See the `Styles` section for more details. */
        "ReactModal__Overlay"
    }

    id={
        /* String id to be applied to the content div. */
        "some-id"
    }

    className={
        /* String className to be applied to the modal content.
        See the `Styles` section for more details. */
        "ReactModal__Content"
    }

    bodyOpenClassName={
        /* String className to be applied to the document.body
        (must be a constant string).
        This attribute when set as `null` doesn't add any class
        to document.body.
        See the `Styles` section for more details. */
        "ReactModal__Body--open"
    }

    htmlOpenClassName={
        /* String className to be applied to the document.html
        (must be a constant string).
        This attribute is `null` by default.
        See the `Styles` section for more details. */
        "ReactModal__Html--open"
    }

    ariaHideApp={
        /* Boolean indicating if the appElement should be hidden */
        true
    }

    shouldFocusAfterRender={
        /* Boolean indicating if the modal should be focused after render. */
        true
    }

    shouldCloseOnOverlayClick={
        /* Boolean indicating if the overlay should close the modal */
        true
    }

    shouldCloseOnEsc={
        /* Boolean indicating if pressing the esc key should close the modal
        Note: By disabling the esc key from closing the modal
        you may introduce an accessibility issue. */
        true
    }

    shouldReturnFocusAfterClose={
        /* Boolean indicating if the modal should restore focus to the element
        that had focus prior to its display. */
        true
    }

    role={
        /* String indicating the role of the modal, allowing the 'dialog' role
        to be applied if desired.
        This attribute is `dialog` by default. */
        "dialog"
    }

    preventScroll={
        /* Boolean indicating if the modal should use the preventScroll flag when
        restoring focus to the element that had focus prior to its display. */
        false
    }

    parentSelector={
        /* Function that will be called to get the parent element
        that the modal will be attached to. */
        () => document.body
    }

    aria={
        /* Additional aria attributes (optional). */
        {
            labelledby: "heading",
            describedby: "full_description"
        }
    }

    data={
        /* Additional data attributes (optional). */
        { background: "green" }
    }

    testId={
        /* String testId that renders a data-testid attribute in the DOM,
        useful for testing. */
        ""
    }

    overlayRef={
        /* Overlay ref callback. */
        setOverlayRef
    }

    contentRef={
        /* Content ref callback. */
        setContentRef
    }

    overlayElement={
        /* Custom Overlay element. */
        (props, contentElement) => <div {...props}>{contentElement}</div>
    }

    contentElement={
        /* Custom Content element. */
        (props, children) => <div {...props}>{children}</div>
    }
>
    <p>Modal Content</p>
</ReactModal>
