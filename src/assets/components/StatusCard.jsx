import styled from 'styled-components';

const StatusCardWrapper = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: white;
  font-weight: bold;
  text-align: center;
  transition: transform 0.2s;

  
  background-color: ${(props) => {
    switch (props.type) {
      case 'success':
        return '#22c55e'; 
      case 'error':
        return '#ef4444'; 
      case 'warning':
        return '#f59e0b'; 
      default:
        return '#64748b';
    }
  }};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;


const StatusCard = ({ type = "info", message }) => { 
  return (
    <StatusCardWrapper type={"success"}>
      {type?.toUpperCase()}: {message}
    </StatusCardWrapper>
  );
};

export default StatusCard;