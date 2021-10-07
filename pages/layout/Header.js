import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <button>
          <h3>Header</h3>
        </button>
      </Link>
    </div>
  );
};

export default Header;
