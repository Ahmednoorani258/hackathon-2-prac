// app/users/page.tsx
import axios from 'axios';
import Image from 'next/image';

interface Products {
          name: string,
          description:string,
          price: number,
          tags:[],
          sizes: [],
          image: string,
          ratings: number,
          stock_quantity:number,
          id: string
        }
    


const UsersPage = async () => {
  const res = await axios.get('https://mockapi.io/projects/677d57be4496848554ca2f69/Products');
  const users: Products[] = res.data;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
         
         return(<li key={user.id}>
            {user.id}
            {/* <Image src={user.image} alt={`${user.name}'s avatar`} width={200} height={200} />
            {user.name} - {user.price} */}
          </li>)
})}
      </ul>
    </div>
  );
};

export default UsersPage;
