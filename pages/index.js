import Btn from "@/components/btn";
import Students from "@/components/Students";


export default function Home({ students }) {
  return (
    <div>
      <Btn />
      <Students students={students} />
    </div>
  );
}



export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/students`);
  const data = await res.json();
  return {
    props: {
      students: data,
    },
  };
}
