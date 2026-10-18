"use client";

import React, { useState } from "react";
import { Form, Input, Button, Card, message, Tooltip } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { Mail, Copy, Check, Send, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { profileData } from "@/data/profile";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactSection() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      message.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      message.info(`Email: ${profileData.email}`);
    }
  };

  const onFinish = async (values: ContactFormValues) => {
    setLoading(true);

    const formspreeKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY;

    if (formspreeKey) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          message.success("Thank you! Your message has been sent successfully.");
          form.resetFields();
        } else {
          message.error("Failed to send message via form endpoint. Opening default mail client instead.");
          window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(
            values.subject
          )}&body=${encodeURIComponent(
            `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
          )}`;
        }
      } catch {
        message.info("Opening email client to send message...");
        window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(
          values.subject
        )}&body=${encodeURIComponent(
          `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
        )}`;
      } finally {
        setLoading(false);
      }
    } else {
      // Fallback: Real delivery via mailto with pre-filled content
      window.location.href = `mailto:${profileData.email}?subject=${encodeURIComponent(
        values.subject
      )}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
      )}`;
      message.success("Opening your email client to send message!");
      setLoading(false);
      form.resetFields();
    }
  };

  return (
    <section id="contact" aria-label="Contact Section" className="max-w-5xl mx-auto px-4 sm:px-6 w-full scroll-mt-20">
      <ScrollReveal direction="up">
        <SectionHeader
          badge="05. CONTACT"
          title="Let's Build Something Together"
          description="Whether you have an engineering question, a project opportunity, or want to collaborate, my inbox is open."
        />
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5 space-y-4">
          <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-5 shadow-sm">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
              Get in Touch Directly
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
              I am actively looking for opportunities to contribute to high-impact projects.
              Feel free to connect or drop an email.
            </p>

            <div className="space-y-4 text-sm">
              {/* Copy Email Button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)] truncate">
                    {profileData.email}
                  </span>
                </div>
                <Tooltip title={copied ? "Copied!" : "Copy Email"}>
                  <Button
                    type="text"
                    size="small"
                    aria-label="Copy email address"
                    onClick={handleCopyEmail}
                    icon={copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[var(--text-secondary)]" />}
                    className="hover:!text-[var(--accent-primary)] !min-w-[32px] !min-h-[32px] !flex !items-center !justify-center"
                  />
                </Tooltip>
              </div>

              {/* GitHub Link */}
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--accent-primary)]/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <GithubOutlined className="text-base text-[var(--accent-primary)]" />
                  <span className="font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                    github.com/duycao04
                  </span>
                </div>
                <span className="text-xs text-[var(--text-muted)] group-hover:text-[var(--accent-primary)]">
                  Visit ↗
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <MapPin className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {profileData.location} (UTC+7)
                </span>
              </div>
            </div>
          </Card>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal direction="up" delay={0.2} className="lg:col-span-7">
          <Card className="!bg-[var(--bg-secondary)] !border-[var(--border-subtle)] !rounded-2xl !p-2 sm:!p-6 shadow-sm">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              requiredMark={false}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Form.Item
                  name="name"
                  label={<span className="text-xs font-semibold text-[var(--text-secondary)]">Your Name</span>}
                  rules={[{ required: true, message: "Please enter your name" }]}
                >
                  <Input
                    placeholder="John Doe"
                    size="large"
                    className="!rounded-lg !bg-[var(--bg-input)] !text-[var(--text-primary)] !border-[var(--border-input)]"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span className="text-xs font-semibold text-[var(--text-secondary)]">Your Email</span>}
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email address" },
                  ]}
                >
                  <Input
                    placeholder="john@example.com"
                    size="large"
                    className="!rounded-lg !bg-[var(--bg-input)] !text-[var(--text-primary)] !border-[var(--border-input)]"
                  />
                </Form.Item>
              </div>

              <Form.Item
                name="subject"
                label={<span className="text-xs font-semibold text-[var(--text-secondary)]">Subject</span>}
                rules={[{ required: true, message: "Please enter a subject" }]}
              >
                <Input
                  placeholder="Project collaboration / Opportunity"
                  size="large"
                  className="!rounded-lg !bg-[var(--bg-input)] !text-[var(--text-primary)] !border-[var(--border-input)]"
                />
              </Form.Item>

              <Form.Item
                name="message"
                label={<span className="text-xs font-semibold text-[var(--text-secondary)]">Message</span>}
                rules={[{ required: true, message: "Please enter your message" }]}
              >
                <Input.TextArea
                  placeholder="Tell me about your project, goals, or timeline..."
                  rows={4}
                  className="!rounded-lg !bg-[var(--bg-input)] !text-[var(--text-primary)] !border-[var(--border-input)]"
                />
              </Form.Item>

              <Form.Item className="!mb-0 pt-2">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  icon={<Send className="w-4 h-4 text-black" />}
                  className="!w-full !bg-[var(--accent-primary)] hover:!opacity-95 !text-black !font-semibold !h-12 !rounded-xl !border-none !shadow-md"
                >
                  {loading ? "Sending Message..." : "Send Message"}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
