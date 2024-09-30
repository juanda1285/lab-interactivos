type Props = {
    name: string;
    email: string;
}

function User({ name, email }: Props) {
    return (
      <div>
        <strong>{name}</strong>
        <p>{email}</p>
      </div>
    );
  }
  
  export default User;
  