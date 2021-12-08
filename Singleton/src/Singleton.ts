/**
 * Lazy Instantiation Approach
 */

/**
 * MultiThreading Is A Common Issue To Destroy The Singleton.
 * 
 * Solved By : 
 *  1. Synchronizing Threads (Fairly Expensive)
 *  2. Eagerly Instantiation
 *  3. Doublr-Checked Locking
 */


export class Singleton {
  public static firstInstance: Singleton;

  private constructor() { }

  public static getInstance (): Singleton {

    if (Singleton.firstInstance === null) {
      Singleton.firstInstance = new Singleton();
    }

    return Singleton.firstInstance;
  }
}