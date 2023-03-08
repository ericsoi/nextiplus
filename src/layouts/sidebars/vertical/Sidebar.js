import { Button, Nav, NavItem } from "reactstrap";
import Logo from "../../logo/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    title: "Dashboard",
    href: "/ui/Home",
    icon: "bi bi-speedometer2",
  },

  // Underwriting Header
  {
    title: "UNDERWRITING",
    href: "#",
    icon: "",
  },
  {
    title: "Policies",
    href: "/ui/policies",
    icon: "bi bi-briefcase-fill",
  },
  {
    title: "Queried Quotations",
    href: "/ui/search",
    icon: "bi bi-search",
  },
  {
    title: "My Quotes",
    href: "/ui/quote",
    icon: "bi bi-bag-check-fill",
  },
  {
    title: "Renewals",
    href: "/ui/renewal",
    icon: "bi bi-battery-charging",
  },
  {
    title: "Claims",
    href: "/ui/claims",
    icon: "bi bi-recycle",
  },

  {
    title: "ACCOUNT",
    href: "#",
    icon: "",
  },
  {
    title: "Profile",
    href: "/ui/profile",
    icon: "bi bi-person-circle",
  },
  {
    title: "Products",
    href: "/ui/product",
    icon: "bi bi-layout-sidebar",
  },
  {
    title: "Agents",
    href: "/ui/agent",
    icon: "bi bi-person-workspace",
  },
  {
    title: "Clients",
    href: "/ui/client",
    icon: "bi bi-people",
  },
  {
    title: "Member Companies",
    href: "/ui/membercompany",
    icon: "bi bi-building",
  },
  {
    title: "Vehicle Classes",
    href: "/ui/class",
    icon: "bi bi-truck",
  },
  {
    title: "Cover Types",
    href: "/ui/type",
    icon: "bi bi-shield",
  },
  {
    title: "Users",
    href: "/ui/users",
    icon: "bi bi-people",
  },

//Dmvic Header 
  {
    title: "DMVIC",
    href: "#",
    icon: "",
  },
  {
    title: "Double Insurance",
    href: "/ui/dmvic/doubleinsurance",
    icon: "bi bi-people",
  },
  {
    title: "Get Cert PDF",
    href: "/ui/dmvic/certpdf",
    icon: "bi bi-ticket-detailed",
  },
  {
    title: "Cancel Cert",
    href: "/ui/dmvic/cancel",
    icon: "bi bi-x-octagon",
  },
  {
    title: "Vehicle Search",
    href: "/ui/dmvic/vehiclesearch",
    icon: "bi bi-google",
  },
  {
    title: "Inventory",
    href: "/ui/dmvic/inventory",
    icon: "bi bi-list-ul",
  },

  {
    title: "MPESA TRANSACTIONS",
    href: "#",
    icon: "",
  },
  {
    title: "Confirmed",
    href: "/ui/dmvic/confirmed",
    icon: "bi bi-coin",
  },
  {
    title: "Failed",
    href: "/ui/dmvic/failed",
    icon: "bi bi-currency-exchange",
  },

  // {
  //   title: "Alert",
  //   href: "/ui/alerts",
  //   icon: "bi bi-bell",
  // },
  // {
  //   title: "Badges",
  //   href: "/ui/badges",
  //   icon: "bi bi-patch-check",
  // },
  // {
  //   title: "Buttons",
  //   href: "/ui/buttons",
  //   icon: "bi bi-hdd-stack",
  // },
  // {
  //   title: "Cards",
  //   href: "/ui/cards",
  //   icon: "bi bi-card-text",
  // },
  // {
  //   title: "Grid",
  //   href: "/ui/grid",
  //   icon: "bi bi-columns",
  // },
  // {
  //   title: "Table",
  //   href: "/ui/tables",
  //   icon: "bi bi-layout-split",
  // },
  // {
  //   title: "Forms",
  //   href: "/ui/forms",
  //   icon: "bi bi-textarea-resize",
  // },
  // {
  //   title: "Breadcrumbs",
  //   href: "/ui/breadcrumbs",
  //   icon: "bi bi-link",
  // },
  // {
  //   title: "About",
  //   href: "/about",
  //   icon: "bi bi-people",
  // },
];

const Sidebar = ({ showMobilemenu }) => {
  let curl = useRouter();
  const location = curl.pathname;

  return (
    <div className="p-3" style={{overflowY: 'auto', overflowX: "hidden"}}>
      <div className="d-flex align-items-center">
        {/* <Logo /> */}
        MAIN DASHBOARD
        <Button
          close
          size="sm"
          className="ms-auto d-lg-none"
          onClick={showMobilemenu}
        ></Button>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link href={navi.href}>
                <a
                  className={
                    location === navi.href
                      ? "text-primary nav-link py-3"
                      : "nav-link text-secondary py-3"
                  }
                >
                  <i className={navi.icon}></i>
                  <span className="ms-3 d-inline-block">{navi.title}</span>
                </a>
              </Link>
            </NavItem>
          ))}
          {/* <Button
            color="secondary"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-next-js-free-admin-template/"
          >
            Download Free
          </Button>
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/xtreme-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
