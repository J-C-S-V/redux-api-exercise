import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../features/users/usersSlice';

const FetchedUsers = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.email}>
              {user.name.title} {user.name.first} {user.name.last}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchedUsers;
