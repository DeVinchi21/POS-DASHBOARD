import { Card, Statistic } from 'antd';

const StatisticsCard = ({ title, value, prefix }) => {
  return (
    <Card>
      <Statistic title={title} value={value} prefix={prefix} />
    </Card>
  );
};

export default StatisticsCard;
