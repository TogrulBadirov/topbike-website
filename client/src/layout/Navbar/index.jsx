import { useEffect, useState } from "react";
import { NavLink, useLocation  } from "react-router-dom";
import "./index.scss";
import LoginRegisterModal from "../../components/LoginRegisterModal";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false)
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const {user} = useContext(UserContext)
  return (
    <>
    <nav className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === "/profile" || location.pathname === "/admin" || mobileNav ? 'profile' : ''}`}>
      <div className="navbar-logo">
        <NavLink to="/">
          <img
            src="https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289"
            alt="logo"
          />
        </NavLink>
        <div className="burger-icon">
      <button className="burger-button" onClick={()=>setMobileNav(!mobileNav)}><GiHamburgerMenu /></button>
      
      </div>
      </div>
      <div className="navbar-pages">
        <ul className="pages-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">Featured</NavLink>
          </li>
          <li>
            <NavLink to="/">Pages</NavLink>
          </li>
          {user && user.role === "admin" ?
          <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>:
          ""
        }
        </ul>
      </div>
      <div className="navbar-login-basket">
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="m 1312.7,795.5 c -472.7,0 -857.204,384.3 -857.204,856.7 0,472.7 384.504,857.2 857.204,857.2 472.7,0 857.3,-384.5 857.3,-857.2 0,-472.4 -384.6,-856.7 -857.3,-856.7 z M 2783.9,352.699 2172.7,963.898 c 155.8,194.702 241.5,438.602 241.5,688.302 0,607.3 -494.1,1101.4 -1101.5,1101.4 -607.302,0 -1101.399,-494.1 -1101.399,-1101.4 0,-607.4 494.097,-1101.501 1101.399,-1101.501 249.8,0 493.5,85.5 687.7,241 L 2611.7,181 c 23,-23 53.6,-35.699 86.1,-35.699 32.4,0 63,12.699 86,35.699 23.1,22.801 35.8,53.301 35.8,85.898 0,32.602 -12.7,63 -35.7,85.801"
                ></path>
              </g>
            </g>
          </svg>
        </NavLink>
        {user?
        <NavLink  to="/profile">
        {user && <span>{user.email}</span>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          height="24"
          width="24"
          id="svg2"
          version="1.1"
        >
          <defs id="defs6"></defs>
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
            <g transform="scale(0.1)" id="g12">
              <path
                id="path14"
                d="m 1506.87,2587.11 c -225.04,0 -408.14,-183.08 -408.14,-408.11 0,-225.06 183.1,-408.13 408.14,-408.13 225.02,0 408.13,183.07 408.13,408.13 0,225.03 -183.11,408.11 -408.13,408.11 z m 0,-1038.56 c -347.64,0 -630.432,282.79 -630.432,630.45 0,347.63 282.792,630.43 630.432,630.43 347.63,0 630.42,-282.8 630.42,-630.43 0,-347.66 -282.79,-630.45 -630.42,-630.45 v 0"
              ></path>
              <path
                id="path16"
                d="M 399.648,361.789 H 2614.07 c -25.06,261.531 -139.49,503.461 -327.47,689.831 -124.25,123.14 -300.78,193.96 -483.86,193.96 h -591.76 c -183.61,0 -359.601,-70.82 -483.863,-193.96 C 539.148,865.25 424.719,623.32 399.648,361.789 Z M 2730.69,139.461 H 283.035 c -61.558,0 -111.16,49.59 -111.16,111.16 0,363.438 141.68,704 398.32,959.019 165.657,164.55 399.414,258.82 640.785,258.82 h 591.76 c 241.94,0 475.14,-94.27 640.8,-258.82 256.63,-255.019 398.31,-595.581 398.31,-959.019 0,-61.57 -49.59,-111.16 -111.16,-111.16 v 0"
              ></path>
            </g>
          </g>
        </svg>
      </NavLink>
      :
      <NavLink onClick={()=>setIsModalOpen(!isModalOpen)}>
          {user && <span>{user.email}</span>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="m 1506.87,2587.11 c -225.04,0 -408.14,-183.08 -408.14,-408.11 0,-225.06 183.1,-408.13 408.14,-408.13 225.02,0 408.13,183.07 408.13,408.13 0,225.03 -183.11,408.11 -408.13,408.11 z m 0,-1038.56 c -347.64,0 -630.432,282.79 -630.432,630.45 0,347.63 282.792,630.43 630.432,630.43 347.63,0 630.42,-282.8 630.42,-630.43 0,-347.66 -282.79,-630.45 -630.42,-630.45 v 0"
                ></path>
                <path
                  id="path16"
                  d="M 399.648,361.789 H 2614.07 c -25.06,261.531 -139.49,503.461 -327.47,689.831 -124.25,123.14 -300.78,193.96 -483.86,193.96 h -591.76 c -183.61,0 -359.601,-70.82 -483.863,-193.96 C 539.148,865.25 424.719,623.32 399.648,361.789 Z M 2730.69,139.461 H 283.035 c -61.558,0 -111.16,49.59 -111.16,111.16 0,363.438 141.68,704 398.32,959.019 165.657,164.55 399.414,258.82 640.785,258.82 h 591.76 c 241.94,0 475.14,-94.27 640.8,-258.82 256.63,-255.019 398.31,-595.581 398.31,-959.019 0,-61.57 -49.59,-111.16 -111.16,-111.16 v 0"
                ></path>
              </g>
            </g>
          </svg>
          
        </NavLink>
        }
        
        
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="m 903,2424.4 c 157.9,0 306.4,-61.5 418.1,-173.1 l 134.8,-134.9 c 20.7,-20.6 48.1,-32 77.1,-32 29,0 56.4,11.4 77,32 l 133.7,133.7 c 111.7,111.6 259.9,173.1 417.5,173.1 156.91,0 305,-61.3 416.8,-172.5 111.2,-111.3 172.5,-259.5 172.5,-417.5 0.6,-157.3 -60.69,-305.5 -172.5,-417.4 L 1531.5,373.5 487.402,1417.6 c -111.601,111.7 -173.105,259.9 -173.105,417.5 0,158.1 61.199,306.1 172.5,416.8 111.308,111.2 259.101,172.5 416.203,172.5 z m 1829.7,-19.6 c 0,0 0,0 -0.1,0 -152.4,152.4 -355.1,236.3 -570.9,236.3 -215.7,0 -418.7,-84.1 -571.5,-236.9 l -56.9,-57 -58.2,58.2 c -153.1,153.1 -356.3,237.5 -572.1,237.5 -215.305,0 -417.902,-83.9 -570.305,-236.3 -153,-153 -236.8942,-356 -236.2966,-571.5 0,-215 84.4026,-417.8 237.4966,-571 L 1454.7,143.301 c 20.5,-20.403 48.41,-32.199 76.8,-32.199 28.7,0 56.7,11.5 76.7,31.597 L 2731.5,1261.8 c 152.7,152.7 236.8,355.7 236.8,571.4 0.7,216 -83,419 -235.6,571.6"
                ></path>
              </g>
            </g>
          </svg>
        </NavLink>
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297.78668 398.66666"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g
              transform="matrix(1.3333333,0,0,-1.3333333,0,398.66667)"
              id="g10"
            >
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="M 2233.36,2432.71 H 0 V 0 h 2233.36 v 2432.71 z m -220,-220 V 220 H 220.004 V 2212.71 H 2013.36"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="path16"
                  d="m 1116.68,2990 v 0 C 755.461,2990 462.637,2697.18 462.637,2335.96 V 2216.92 H 1770.71 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-220 c 204.58,0 376.55,-142.29 422.19,-333.08 H 694.492 C 740.117,2627.71 912.102,2770 1116.68,2770"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="path18"
                  d="M 1554.82,1888.17 H 678.543 v 169.54 h 876.277 v -169.54"
                ></path>
              </g>
            </g>
          </svg>
        </NavLink>
      </div>
      
      <div className={`sub-menu ${mobileNav?"active":""}`}>
      <div className="submenu-pages">
        <ul className="pages-list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/">Featured</NavLink>
          </li>
          <li>
            <NavLink to="/">Pages</NavLink>
          </li>
          {user && user.role === "admin" ?
          <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>:
          ""
        }
        </ul>
        <div className="submenu-login-basket">
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="m 1312.7,795.5 c -472.7,0 -857.204,384.3 -857.204,856.7 0,472.7 384.504,857.2 857.204,857.2 472.7,0 857.3,-384.5 857.3,-857.2 0,-472.4 -384.6,-856.7 -857.3,-856.7 z M 2783.9,352.699 2172.7,963.898 c 155.8,194.702 241.5,438.602 241.5,688.302 0,607.3 -494.1,1101.4 -1101.5,1101.4 -607.302,0 -1101.399,-494.1 -1101.399,-1101.4 0,-607.4 494.097,-1101.501 1101.399,-1101.501 249.8,0 493.5,85.5 687.7,241 L 2611.7,181 c 23,-23 53.6,-35.699 86.1,-35.699 32.4,0 63,12.699 86,35.699 23.1,22.801 35.8,53.301 35.8,85.898 0,32.602 -12.7,63 -35.7,85.801"
                ></path>
              </g>
            </g>
          </svg>
        </NavLink>
        {user?
        <NavLink  to="/profile">
        {user && <span>{user.email}</span>}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          height="24"
          width="24"
          id="svg2"
          version="1.1"
        >
          <defs id="defs6"></defs>
          <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
            <g transform="scale(0.1)" id="g12">
              <path
                id="path14"
                d="m 1506.87,2587.11 c -225.04,0 -408.14,-183.08 -408.14,-408.11 0,-225.06 183.1,-408.13 408.14,-408.13 225.02,0 408.13,183.07 408.13,408.13 0,225.03 -183.11,408.11 -408.13,408.11 z m 0,-1038.56 c -347.64,0 -630.432,282.79 -630.432,630.45 0,347.63 282.792,630.43 630.432,630.43 347.63,0 630.42,-282.8 630.42,-630.43 0,-347.66 -282.79,-630.45 -630.42,-630.45 v 0"
              ></path>
              <path
                id="path16"
                d="M 399.648,361.789 H 2614.07 c -25.06,261.531 -139.49,503.461 -327.47,689.831 -124.25,123.14 -300.78,193.96 -483.86,193.96 h -591.76 c -183.61,0 -359.601,-70.82 -483.863,-193.96 C 539.148,865.25 424.719,623.32 399.648,361.789 Z M 2730.69,139.461 H 283.035 c -61.558,0 -111.16,49.59 -111.16,111.16 0,363.438 141.68,704 398.32,959.019 165.657,164.55 399.414,258.82 640.785,258.82 h 591.76 c 241.94,0 475.14,-94.27 640.8,-258.82 256.63,-255.019 398.31,-595.581 398.31,-959.019 0,-61.57 -49.59,-111.16 -111.16,-111.16 v 0"
              ></path>
            </g>
          </g>
        </svg>
      </NavLink>
      :
      <NavLink onClick={()=>setIsModalOpen(!isModalOpen)}>
          {user && <span>{user.email}</span>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="m 1506.87,2587.11 c -225.04,0 -408.14,-183.08 -408.14,-408.11 0,-225.06 183.1,-408.13 408.14,-408.13 225.02,0 408.13,183.07 408.13,408.13 0,225.03 -183.11,408.11 -408.13,408.11 z m 0,-1038.56 c -347.64,0 -630.432,282.79 -630.432,630.45 0,347.63 282.792,630.43 630.432,630.43 347.63,0 630.42,-282.8 630.42,-630.43 0,-347.66 -282.79,-630.45 -630.42,-630.45 v 0"
                ></path>
                <path
                  id="path16"
                  d="M 399.648,361.789 H 2614.07 c -25.06,261.531 -139.49,503.461 -327.47,689.831 -124.25,123.14 -300.78,193.96 -483.86,193.96 h -591.76 c -183.61,0 -359.601,-70.82 -483.863,-193.96 C 539.148,865.25 424.719,623.32 399.648,361.789 Z M 2730.69,139.461 H 283.035 c -61.558,0 -111.16,49.59 -111.16,111.16 0,363.438 141.68,704 398.32,959.019 165.657,164.55 399.414,258.82 640.785,258.82 h 591.76 c 241.94,0 475.14,-94.27 640.8,-258.82 256.63,-255.019 398.31,-595.581 398.31,-959.019 0,-61.57 -49.59,-111.16 -111.16,-111.16 v 0"
                ></path>
              </g>
            </g>
          </svg>
          
        </NavLink>
        }
        
        
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g transform="matrix(1.3333333,0,0,-1.3333333,0,400)" id="g10">
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="m 903,2424.4 c 157.9,0 306.4,-61.5 418.1,-173.1 l 134.8,-134.9 c 20.7,-20.6 48.1,-32 77.1,-32 29,0 56.4,11.4 77,32 l 133.7,133.7 c 111.7,111.6 259.9,173.1 417.5,173.1 156.91,0 305,-61.3 416.8,-172.5 111.2,-111.3 172.5,-259.5 172.5,-417.5 0.6,-157.3 -60.69,-305.5 -172.5,-417.4 L 1531.5,373.5 487.402,1417.6 c -111.601,111.7 -173.105,259.9 -173.105,417.5 0,158.1 61.199,306.1 172.5,416.8 111.308,111.2 259.101,172.5 416.203,172.5 z m 1829.7,-19.6 c 0,0 0,0 -0.1,0 -152.4,152.4 -355.1,236.3 -570.9,236.3 -215.7,0 -418.7,-84.1 -571.5,-236.9 l -56.9,-57 -58.2,58.2 c -153.1,153.1 -356.3,237.5 -572.1,237.5 -215.305,0 -417.902,-83.9 -570.305,-236.3 -153,-153 -236.8942,-356 -236.2966,-571.5 0,-215 84.4026,-417.8 237.4966,-571 L 1454.7,143.301 c 20.5,-20.403 48.41,-32.199 76.8,-32.199 28.7,0 56.7,11.5 76.7,31.597 L 2731.5,1261.8 c 152.7,152.7 236.8,355.7 236.8,571.4 0.7,216 -83,419 -235.6,571.6"
                ></path>
              </g>
            </g>
          </svg>
        </NavLink>
        <NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297.78668 398.66666"
            height="24"
            width="24"
            id="svg2"
            version="1.1"
          >
            <defs id="defs6"></defs>
            <g
              transform="matrix(1.3333333,0,0,-1.3333333,0,398.66667)"
              id="g10"
            >
              <g transform="scale(0.1)" id="g12">
                <path
                  id="path14"
                  d="M 2233.36,2432.71 H 0 V 0 h 2233.36 v 2432.71 z m -220,-220 V 220 H 220.004 V 2212.71 H 2013.36"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="path16"
                  d="m 1116.68,2990 v 0 C 755.461,2990 462.637,2697.18 462.637,2335.96 V 2216.92 H 1770.71 v 119.04 c 0,361.22 -292.82,654.04 -654.03,654.04 z m 0,-220 c 204.58,0 376.55,-142.29 422.19,-333.08 H 694.492 C 740.117,2627.71 912.102,2770 1116.68,2770"
                ></path>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  id="path18"
                  d="M 1554.82,1888.17 H 678.543 v 169.54 h 876.277 v -169.54"
                ></path>
              </g>
            </g>
          </svg>
        </NavLink>
      </div>
      </div>
      </div>
    </nav>
    {isModalOpen ? <LoginRegisterModal setIsModalOpen={setIsModalOpen} /> : ""}
    </>
  );
};

export default Navbar;
