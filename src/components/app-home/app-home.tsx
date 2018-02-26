import { Component } from '@stencil/core';


@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
      <div class='app-home'>
        <p>
          Welcome to the Stencil App Starter.
          You can use this starter to build entire apps all with
          web components using Stencil!
          Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            Profile page
          </button>
        </stencil-route-link>

        <smart-label alt-text="Copy" text="    Mike was Here   "></smart-label>
        <smart-label alt-text="Copy" text="    Mike was There   "></smart-label>
        <smart-label alt-text="Copy" text="    Mike was Everywhere   "></smart-label>
      </div>
    );
  }
}
