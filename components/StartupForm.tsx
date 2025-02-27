"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  return (
    <form action={() => { }} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">Title</label>
        <Input id="title" name="title" className="startup-form_input" required placeholder="Startup Title" />

        {errors.title && <p className="start-form_error">{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="description" className="startup-form_label">Description</label>
        <Textarea id="description" name="description" className="startup-form_textarea" required placeholder="Startup Description" />

        {errors.description && <p className="start-form_error">{errors.tidescriptiontle}</p>}
      </div>

      <div>
        <label htmlFor="category" className="startup-form_label">Category</label>
        <Input id="category" name="category" className="startup-form_input" required placeholder="Startup Category(Title, Health, Education ...)" />

        {errors.category && <p className="start-form_error">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="link" className="startup-form_label">Image Url</label>
        <Input id="link" name="link" className="startup-form_input" required placeholder="Startup Image URL" />

        {errors.link && <p className="start-form_error">{errors.link}</p>}
      </div>
    </form>

  )
}

export default StartupForm