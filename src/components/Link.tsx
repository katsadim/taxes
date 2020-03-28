import React from 'react';
import MuiLink from '@material-ui/core/Link';
import { Link as GatsbyLink } from 'gatsby';
import { GatsbyLinkProps } from 'gatsby-link';

const Link = React.forwardRef<HTMLAnchorElement, GatsbyLinkProps<any>>(function Link(props, ref) {
    return <MuiLink component={GatsbyLink} ref={ref} {...props} />;
});

export default Link;
