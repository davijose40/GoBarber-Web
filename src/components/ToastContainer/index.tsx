import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { ToastMessageDTO } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContairnerProps {
  messages: ToastMessageDTO[];
}

const ToastContainer: React.FC<ToastContairnerProps> = ({ messages }) => {
  const messsagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messsagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
