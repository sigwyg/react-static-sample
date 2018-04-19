import React from 'react'
import styled from 'styled-components'

// Example of using paths alias via tsconfig.json to easily re-use legacy code
// Also, use TypeScript and JavaScript interchangeably.
import aliasExample from '@myPathAlias/component'

const StyledMyHeading = styled.h1`
    color: blue;
    font-size: 36px;
`

export default () => (
    <div>
        <StyledMyHeading>
            <h1>This is what we're all about.</h1>
        </StyledMyHeading>
        <p>
        React, static sites, performance, speed. It's the stuff that makes us
        tick.
        </p>
        {aliasExample}
    </div>
)
