import { Navbar, Button, Link, Text } from "@nextui-org/react";
import './menu.css'

export default function Menu() {
  return (
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#" >
              <span className="visit">Visitanos bb &#128527;</span>
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
