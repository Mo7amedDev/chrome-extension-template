import Logo from '@/assets/crx.svg'
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utlis';
import { useEffect, useState } from 'react'
//import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [show, setShow] = useState(false)
  const toggle = () => setShow(!show)
  const [openItem, setOpenItem] = useState<number | null>(0)
  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  useEffect(() => {
    const isHostDark = document.documentElement.classList.contains('dark');
    setIsDark(isHostDark)
  }, []);

  return (
    <Card className={cn('fixed top-10 left-10  max-w-[300px]', isDark ? 'dark' : '')}>
      {show && (
        <div className={`popup-content ${show ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className='bg-red-400 text-yellow-400 border-2 '>HELLO CRXJS</h1>
        </div>
      )}
      <Button onClick={() => setIsDialogOpen(true)}>
        Open Settings
      </Button>
      <button className="toggle-button" onClick={toggle}>
        <button className=' px-4 py-2 text-sm inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none bg-primary text-primary-foreground hover:bg-brand-hover'>Hello!</button>
        <Button  >
          CLICK ME
        </Button>
        <img src={Logo} alt="CRXJS logo" className="max-w-32 max-h-32" />
      </button>
      <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <DialogHeader>
          <DialogTitle>Extension Settings</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Your Form Content Here */}
          <div className="text-sm text-foreground">
            Example Content inside the Shadow DOM Dialog.
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setIsDialogOpen(false)}>
            Save Changes
          </Button>
        </DialogFooter>
      </Dialog>
      <Accordion >
        <AccordionItem title="Can I close this?">
          Yes! Click the header again to collapse it. Each item works independently now.
        </AccordionItem>

        <AccordionItem title="Is it animated?" defaultOpen={true}>
          Yup. It uses CSS Grid to animate from 0 to the natural height of the content.
        </AccordionItem>

        <AccordionItem title="Does it work in Shadow DOM?">
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.
          Perfectly. No external library events needed.

        </AccordionItem>
      </Accordion>
    </Card>
  )
}

export default App
