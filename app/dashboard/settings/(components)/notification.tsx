import React from 'react';
import Subtitle from './subtitle';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const Notification = () => {
  const initialNotification = {
    notification: false,
    dreamAffair: true,
    registry: false,
    rsvp: true,
    guests: false,
    purchasedGift: true,
    budget: true,
    checklist: false,
  };

  const [notification, setNotification] = React.useState(initialNotification);

  const handleSubmit = () => {
    console.log(notification);
  };
  return (
    <div className="p-5 lg:p-16">
      <div className="border rounded-2xl p-6">
        <Subtitle text="App Notification" />
        <div className="mt-8">
          <div className="flex items-center space-x-3">
            <Switch
              id="notification-n"
              checked={notification.notification}
              onCheckedChange={() => setNotification({ ...notification, notification: !notification.notification })}
            />
            <Label htmlFor="notification-n">Enable</Label>
          </div>
        </div>
        <div className="mt-8">
          <Subtitle text="Email Notification" />
          <div className="mt-8">
            <div className="flex items-center space-x-3">
              <Switch
                id="dreamaffair-n"
                checked={notification.dreamAffair}
                onCheckedChange={() => setNotification({ ...notification, dreamAffair: !notification.dreamAffair })}
              />
              <Label htmlFor="dreamaffair-n">Dream Affairs</Label>
            </div>
            <p className="mt-2.5 text-xs sm:text-sm">
              Get notified of feature updates and news related to Dream Affairs and event planning.
            </p>
          </div>
          <div className="mt-5">
            <div className="flex items-center space-x-3">
              <Switch
                id="registry-n"
                checked={notification.registry}
                onCheckedChange={() => setNotification({ ...notification, registry: !notification.registry })}
              />
              <Label htmlFor="registry-n">Registry Inspiration</Label>
            </div>
            <p className="mt-2.5 text-xs sm:text-sm">
              Registry tips, new arrivals and gift inspiration - to get the most out of your registry
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Subtitle text="Customize Notification" />
          <p className="mt-4 text-sm">Choose which Events to be notified about:</p>
          <div className="mt-8">
            <div className="flex items-center space-x-3">
              <Switch
                id="rsvp-n"
                checked={notification.rsvp}
                onCheckedChange={() => setNotification({ ...notification, rsvp: !notification.rsvp })}
              />
              <Label htmlFor="rsvp-n">RSVP Updates</Label>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-3">
              <Switch
                id="guests-n"
                checked={notification.guests}
                onCheckedChange={() => setNotification({ ...notification, guests: !notification.guests })}
              />
              <Label htmlFor="guests-n">Guests Additions</Label>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-3">
              <Switch
                id="purchased-n"
                checked={notification.purchasedGift}
                onCheckedChange={() => setNotification({ ...notification, purchasedGift: !notification.purchasedGift })}
              />
              <Label htmlFor="purchased-n">Purchased Gifts</Label>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-3">
              <Switch
                id="budget-n"
                checked={notification.budget}
                onCheckedChange={() => setNotification({ ...notification, budget: !notification.budget })}
              />
              <Label htmlFor="budget-n">Budget Alerts</Label>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-3">
              <Switch
                id="checklist-n"
                checked={notification.checklist}
                onCheckedChange={() => setNotification({ ...notification, checklist: !notification.checklist })}
              />
              <Label htmlFor="checklist-n">Checklist Reminders</Label>
            </div>
          </div>
        </div>
      </div>
      <Button variant={'secondary'} className="mt-10 px-10" onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
};

export default Notification;
