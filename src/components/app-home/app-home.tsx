import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
      <h2>What is it?</h2>
        <p>
          This is a custom web component written in Stencil JS that implements
          a `smart` text label. Use it anywhere you'd use a &lt;span&gt; element
          to provide the following custom functionality:
        </p>
        <ul>
          <li>Automatically trim whitespace from strings.</li>
          <li>Provide a copy-to-clipboard link for each element, displayed on
            hover.</li>
        </ul>

        <p>
          Check out the docs on <a href='https://stenciljs.com'>stenciljs.com</a>
          for more information.
        </p>

        <h2>Usage</h2>
        &lt;smart-label alt-text="Copy" text="    Your Text, with or without whitespace   "&gt;
        &lt;/smart-label&gt;

        <hr />
        <h2>Test here</h2>
        <p>Hover your mouse over each of the smart labels below. Click the
          copy icon that appears to copy just that text to the clipboard.
        </p>
        <smart-label alt-text="Copy" text="    Mike was Here   "></smart-label>
        <smart-label alt-text="Copy" text="    Mike was There   "></smart-label>
        <smart-label alt-text="Copy" text="    Mike was Everywhere   "></smart-label>
      </div>
    );
  }
}
