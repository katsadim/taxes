import React from 'react';
import MuiLink from '@mui/material/Link';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyLinkProps } from 'gatsby-link';

const Link = React.forwardRef<HTMLAnchorElement, GatsbyLinkProps<any>>(function Link(props, ref) {
    return <MuiLink component={GatsbyLink} ref={ref} {...props} underline="hover" />;
});

export default Link;
