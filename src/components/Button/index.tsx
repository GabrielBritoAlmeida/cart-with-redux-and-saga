import styles from './styles.module.css'

type ButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export function Button({ children, type = 'button', ...props }: ButtonProps) {
  return (
    <div {...props}>
      <button type={type} className={styles.button}>
        {children}
      </button>
    </div>
  )
}
