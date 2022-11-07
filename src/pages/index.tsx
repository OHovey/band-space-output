import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

import * as Themes from '../themes';

const IndexPage: React.FunctionComponent = () => (
    
    <main>
      {(() => {
        switch (process.env.THEME) {
          case 'Original':
            return (
              <Themes.Original />  
            );
          case 'Downward':
            return (
              <Themes.Downward />
            )
        }
      })()}
    </main>
  )

export const query = graphql`

`;

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
