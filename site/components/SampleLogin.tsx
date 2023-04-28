import {
  Calendar,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  Button,
  Switch,
  Input,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  Tag,
  Progress,
} from '@bitglaze/glaze-ui';
import { useState } from 'react';

const SampleLogin = () => {
  const [awesome, setAwesome] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center w-3/4 align-center">
      <div className="p-10 border rounded-md bg-background">
        <p className="text-2xl text-center">Sample View </p>
        <br />
        <div className="mb-4">
          <label>First Name</label>
          <Input placeholder="Rugved" />
        </div>
        <div className="mb-4">
          <label>Last Name</label>
          <Input placeholder="Somwanshi" />
        </div>
        <div className="flex-row w-full mb-4">
          <label>Awesomeness Level {awesome ? '😎' : '🤔'}</label>
          <Progress className="mb-2" value={awesome ? 100 : 10} />
          <Switch
            checked={awesome}
            onClick={() => {
              setAwesome(!awesome);
            }}
            label="Build amazing components?"
          />
        </div>
        <div className="flex-row mb-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={'outline'}>Select your birthdate</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Calendar />
            </DropdownMenuContent>
          </DropdownMenu>
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="ml-3" variant={'outline'}>
                View more details
              </Button>
            </DrawerTrigger>
            <DrawerContent>Test</DrawerContent>
          </Drawer>
        </div>
        <Button className="w-full mr-3">Create a account</Button>
      </div>
    </div>
  );
};

export default SampleLogin;
