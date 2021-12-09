import { Shield } from "./Shield"

export function Header(){
  return(
  <header>
    <div className="shield">
      <Shield />
    </div>
    <div>
      <h1>Hogwarts School of Wichtcraft and Wizardry</h1>
    </div>
    <div className="shield">
      <Shield />
    </div>
  </header>
  )
}