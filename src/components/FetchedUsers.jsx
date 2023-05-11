import { useSelector } from 'react-redux';

// Create a new component that will contain your fetched users:
// Import useSelector and destructure your users, isLoading and error from your users state
// Add a loading state; JSX content that shows when isLoading is true
// Add an error state; JSX content that shows when error has received new content
// Add a default state that maps over your users inside of an unordered list:
// Add a key to the container element.
// Render the first and last name of the user

const FetchedUsers = () => {
  const { users, isLoading, error } = useSelector((state) => state.users);
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchedUsers;
// const FetchedUsers = () => {
//   const { users, isLoading, error } = useSelector((state) => state.users);
//   console.log(users);
//   console.log(isLoading);
//   console.log(error);
//   return <div>{isLoading ? <div>Loading...</div> : <h1>hi</h1>}</div>;
// };

// export default FetchedUsers;
