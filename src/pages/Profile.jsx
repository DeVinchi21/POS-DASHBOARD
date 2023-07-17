import './Pages.css';

const Profile = () => {
  const user = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    avatar: 'https://dummyimage.com/200x200',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida vestibulum justo, id lobortis neque accumsan at. Sed pharetra sem mi, a eleifend enim sollicitudin at.',
  };

/* const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch user data
    axios
      .get('https://dummyjson.com/users/1') // Replace with your API endpoint
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
 */
  return (
    <><h1 className='header--titles'>Profile</h1><div className="profile-container">

      <div className="profile-header">
        <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
        <h1 className="profile-name">{user.firstName} {user.lastName}</h1>
        <p className="profile-username">@{user.username}</p>
      </div>
      <div className="profile-content">
        <div className="profile-section">
          <h2 className="profile-section-heading">Personal Information</h2>
          <p className="profile-info">Email: {user.email}</p>
          <p className="profile-info">Bio: {user.bio}</p>
        </div>
      </div>
    </div></>
  );
};

export default Profile;

