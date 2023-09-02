'use client'

import PropTypes from 'prop-types';
import { SessionProvider } from 'next-auth/react';

const Provider = ({ children, session }) => {
  return (
    <SessionProvider session={session}>
        {children}
    </SessionProvider>
  )
}
Provider.propTypes = {
    children: PropTypes.node,
    session: PropTypes.object,
};

export default Provider
