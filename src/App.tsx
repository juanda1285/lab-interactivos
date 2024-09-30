import { useState, useMemo } from 'react';
import Search from './components/Search';
import UserList from './components/UserList';
import Footer from './components/Footer';

interface User {
  id: number;
  name: string;
  email: string;
}


const initialUsers: User[] = [
  { id: 1, name: "Juan David", email: "juanda@mail.com" },
  { id: 2, name: "Juan Daniel", email: "daniel@mail.com" },
  { id: 3, name: "Maria Alejandra", email: "maleja@mail.com" },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  //Devuelve los usuarios filtrados
  //Solo cuando el searchTerm cambia re calcula
  const filteredUsers = useMemo(() => {
    return initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    
    <div className="d-flex flex-column min-vh-100 container">
      <h1 className='mt-5'>Busqueda de usuarios</h1>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserList users={filteredUsers} />
      <Footer />
    </div>
  );
}

export default App;
