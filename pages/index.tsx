import Navbar from "../components/navbar/navbar";
import Router from 'next/router';

export default function SignInPage() {
  if(typeof window !== 'undefined') {
    Router.push('/characters');
  }
  return (
    <>
      <Navbar />
    </>
  );
}
