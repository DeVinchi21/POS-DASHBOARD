import React from 'react';
import { Avatar, Card, Skeleton } from 'antd';

const Profile = () => {
  const [loading, setLoading] = useState(true);

  const avatar = loading ? (
    <Skeleton avatar />
  ) : (
    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxSq.png" />
  );

  return (
    <Card title="Profile">
      {avatar}
      <Statistic
        title="Username"
        value="Bard"
        description="Your username"
      />
      <Statistic
        title="Email"
        value="bard@example.com"
        description="Your email address"
      />
      <Statistic
        title="Joined"
        value="2023-01-01"
        description="The date you joined"
      />
    </Card>
  );
};

export default Profile;
