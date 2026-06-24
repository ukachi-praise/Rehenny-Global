'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LiquidMetalButton } from './ui/liquid-metal-button';

const formSchema = z.object({
  referrerName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  referrerEmail: z.string().email({
    message: 'Please enter a valid email.',
  }),
  studentName: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  studentEmail: z.string().email({
    message: 'Please enter a valid email.',
  }),
  studentPhone: z.string().min(10, {
    message: 'Phone number must be at least 10 digits.',
  }),
  destination: z.string(),
});

export function ReferralForm({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: '',
      referrerEmail: '',
      studentName: '',
      studentEmail: '',
      studentPhone: '',
      destination: 'United Kingdom',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const response = await fetch('/api/refer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setSubmissionStatus('Our team would reach out to you shortly');
      form.reset();
    } else {
      setSubmissionStatus('Something went wrong. Please try again.');
    }
    setIsSubmitting(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <LiquidMetalButton label={label} onClick={() => setOpen(true)} />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Refer a Student</DialogTitle>
        </DialogHeader>
        {submissionStatus ? (
          <div className="text-center py-8">
            <p>{submissionStatus}</p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="referrerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="referrerEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student's Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Student's Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student's Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Student's Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="studentPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student's Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Student's Phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a destination" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="United Kingdom"><span className="fi fi-gb mr-2"></span>United Kingdom</SelectItem>
                        <SelectItem value="United States"><span className="fi fi-us mr-2"></span>United States</SelectItem>
                        <SelectItem value="Canada"><span className="fi fi-ca mr-2"></span>Canada</SelectItem>
                        <SelectItem value="Australia"><span className="fi fi-au mr-2"></span>Australia</SelectItem>
                        <SelectItem value="New Zealand"><span className="fi fi-nz mr-2"></span>New Zealand</SelectItem>
                        <SelectItem value="Ireland"><span className="fi fi-ie mr-2"></span>Ireland</SelectItem>
                        <SelectItem value="Finland"><span className="fi fi-fi mr-2"></span>Finland</SelectItem>
                        <SelectItem value="Hungary"><span className="fi fi-hu mr-2"></span>Hungary</SelectItem>
                        <SelectItem value="China"><span className="fi fi-cn mr-2"></span>China</SelectItem>
                        <SelectItem value="Dubai (UAE)"><span className="fi fi-ae mr-2"></span>Dubai (UAE)</SelectItem>
                        <SelectItem value="Malaysia"><span className="fi fi-my mr-2"></span>Malaysia</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit'}</Button>
                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="flex-shrink mx-4 text-gray-400">OR</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-green-500 hover:bg-green-600 text-white"
                  onClick={() => window.open('https://wa.me/2348161609452', '_blank')}
                >
                  Chat with us on WhatsApp
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
